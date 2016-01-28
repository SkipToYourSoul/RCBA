package action;

import com.opensymphony.xwork2.ActionSupport;
import model.EventUser;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ServletRequestAware;
import service.RealTimeService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

/**
 * Created by liye on 15/11/30.
 *
 */
@ParentPackage("json-default")
public class EventUserAction extends ActionSupport implements ServletRequestAware {
    private static final long serialVersionUID = 1L;

    private HttpServletRequest request;
    private ArrayList<EventUser> eu = new ArrayList<EventUser>();
    private RealTimeService service;

    public ArrayList<EventUser> getEu() {
        return eu;
    }
    public void setEu(ArrayList<EventUser> eu) {
        this.eu = eu;
    }

    @Action(value = "/eventUser", results = { @Result(name = "success", type = "json")})
    public String fetchEventUser() throws Exception{
        String eventId = request.getParameter("eventId");
        String sql = "select * from eventUser where EventId = " + eventId ;

        service = new RealTimeService();
        eu = service.getEventUser(sql);
        return "success";
    }

    @Override
    public void setServletRequest(HttpServletRequest arg0) {
        // TODO Auto-generated method stub
        request = arg0;
    }
}
