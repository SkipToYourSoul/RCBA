package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.Retweet;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RepostService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class RetweetAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private ArrayList<Retweet> re = new ArrayList<Retweet>();
	private RepostService service;
	
	public ArrayList<Retweet> getRe() {
		return re;
	}
	public void setRe(ArrayList<Retweet> re) {
		this.re = re;
	}

	@Action(value = "/repost", results = { @Result(name = "success", type = "json")})
	public String fetchRetweet() throws Exception{	
		//String eventId = request.getParameter("eventId");
		String sql = "select * from Retweet";
		
		service = new RepostService();
		re = service.getRetweet(sql);
		return "success";
	}

	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}

}
