package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.EventMood;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RealTimeService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventMoodAction extends ActionSupport implements ServletRequestAware{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private RealTimeService service;
	private ArrayList<EventMood> em = new ArrayList<EventMood>();
	
	public ArrayList<EventMood> getEm() {
		return em;
	}
	public void setEm(ArrayList<EventMood> em) {
		this.em = em;
	}

	@Action(value = "/eventmood", results = { @Result(name = "success", type = "json")})
	public String fetchEventMood() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "SELECT * FROM eventmood WHERE EventId = " + eventId;
		
		service = new RealTimeService();
		em = service.getEventMood(sql);
		return "success";
	}
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}
}
