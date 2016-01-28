package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.EventInformation;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.EventService;
import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventIntroAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private ArrayList<EventInformation> ei = new ArrayList<EventInformation>();
	private EventService service;
	public ArrayList<EventInformation> getEi() {
		return ei;
	}
	public void setEi(ArrayList<EventInformation> ei) {
		this.ei = ei;
	}
	
	@Action(value = "/eventintro", results = { @Result(name = "success", type = "json")})
	public String fetchEventIntro() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "select * from eventinformation where EventId = " + eventId ;
		
		service = new EventService();
		ei = service.getEventIntro(sql);
		return "success";
	}

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}

}
