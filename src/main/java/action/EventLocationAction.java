package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.EventLocation;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RealTimeService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventLocationAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private HttpServletRequest request;
	private ArrayList<EventLocation> el = new ArrayList<EventLocation>();
	private RealTimeService service;

	public ArrayList<EventLocation> getEl() {
		return el;
	}
	public void setEl(ArrayList<EventLocation> el) {
		this.el = el;
	}

	@Action(value = "/eventlocation", results = { @Result(name = "success", type = "json")})
	public String fetchEventLocation() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "select * from eventlocation where EventId = " + eventId+" order by UserCount desc";
		
		service = new RealTimeService();
		el = service.getEventLocation(sql);
		return "success";
	}
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}

}
