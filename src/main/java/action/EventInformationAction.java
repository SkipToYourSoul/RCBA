package action;

import java.util.ArrayList;

import model.EventInformation;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import service.EventService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventInformationAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ArrayList<EventInformation> ei = new ArrayList<EventInformation>();
	private EventService service;
	public ArrayList<EventInformation> getEi() {
		return ei;
	}
	public void setEi(ArrayList<EventInformation> ei) {
		this.ei = ei;
	}
	
	@Action(value = "/eventinformation", results = { @Result(name = "success", type = "json")})
	public String fetchEventInformation() throws Exception{
		//System.out.println("Enter Index: Get Event TimeLine!");
		service = new EventService();
		ei = service.getEventInformation();
		return "success";
	}
}
