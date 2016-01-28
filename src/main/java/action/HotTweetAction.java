package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import model.HotTweet;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RealTimeService;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class HotTweetAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private HttpServletRequest request;
	private ArrayList<HotTweet> ht = new ArrayList<HotTweet>();
	private RealTimeService service;

	public ArrayList<HotTweet> getHt() {
		return ht;
	}
	public void setHt(ArrayList<HotTweet> ht) {
		this.ht = ht;
	}

	@Action(value = "/hottweet", results = { @Result(name = "success", type = "json")})
	public String fetchHotTweet() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "SELECT EventId,Mid,Text,Time,Max(RepostCount),Uid,Uname,IsV,Location FROM eventretweet WHERE EventId = " + eventId + " GROUP BY Mid ORDER BY Max(RepostCount) DESC";
		
		service = new RealTimeService();
		ht = service.getHotTweet(sql);
		return "success";
	}
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}

}
