package action;

import java.util.ArrayList;

import model.EventInput;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import service.EventService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class EventInputAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ArrayList<EventInput> ei = new ArrayList<EventInput>();
	private EventService service;
	public ArrayList<EventInput> getEi() {
		return ei;
	}
	public void setEi(ArrayList<EventInput> ei) {
		this.ei = ei;
	}
	
	@Action(value = "/eventinput", results = { @Result(name = "success", type = "json")})
	public String fetchEventInput() throws Exception{
		service = new EventService();
		ei = service.getEventInput();
		return "success";
	}

}
