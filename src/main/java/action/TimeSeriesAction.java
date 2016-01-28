package action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;

import service.RealTimeService;
import model.TimeSeries;

import com.opensymphony.xwork2.ActionSupport;

@ParentPackage("json-default")
public class TimeSeriesAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private HttpServletRequest request;
	
	private ArrayList<TimeSeries> ts = new ArrayList<TimeSeries>();
	private RealTimeService service;
	
	public ArrayList<TimeSeries> getTs() {
		return ts;
	}
	public void setTs(ArrayList<TimeSeries> ts) {
		this.ts = ts;
	}
	
	@Action(value = "/timeseries", results = { @Result(name = "success", type = "json")})
	public String fetchTimeSeries() throws Exception{	
		String eventId = request.getParameter("eventId");
		String sql = "select * from timeseries where EventId = " + eventId + " order by Time";
		
		service = new RealTimeService();
		ts = service.getTimeSeries(sql);
		return "success";
	}
	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		request = arg0;
	}
}