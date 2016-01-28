package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.EventClouds;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RealTimeService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventCloudsAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private RealTimeService service;
	private ArrayList<EventClouds> ec = new ArrayList<EventClouds>();
	
	public ArrayList<EventClouds> getEc() {
		return ec;
	}
	public void setEc(ArrayList<EventClouds> ec) {
		this.ec = ec;
	}

	@Action(value = "/eventcloud", results = { @Result(name = "success", type = "json")})
	public String fetchEventClouds() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "SELECT * FROM eventcloud WHERE EventId = " + eventId + " order by count desc limit 60";
		
		service = new RealTimeService();
		ec = service.getEventClouds(sql);
		return "success";
	}
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}
}
