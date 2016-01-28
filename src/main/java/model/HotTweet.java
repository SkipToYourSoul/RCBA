package model;

public class HotTweet {
	private int EventId;
	private String Mid;
	private String Text;
	private String Time;
	private int Response;
	private String Uid;
	private String Uname;
	private String IsV;
	private String Location;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getMid() {
		return Mid;
	}
	public void setMid(String mid) {
		Mid = mid;
	}
	public String getText() {
		return Text;
	}
	public void setText(String text) {
		Text = text;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public int getResponse() {
		return Response;
	}
	public void setResponse(int response) {
		Response = response;
	}
	public String getUid() {
		return Uid;
	}
	public void setUid(String uid) {
		Uid = uid;
	}
	public String getUname() {
		return Uname;
	}
	public void setUname(String uname) {
		Uname = uname;
	}
	public String getIsV() {
		return IsV;
	}
	public void setIsV(String isV) {
		IsV = isV;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	public HotTweet(int eventId, String mid, String text, String time,
			int response, String uid, String uname, String isV, String location) {
		super();
		EventId = eventId;
		Mid = mid;
		Text = text;
		Time = time;
		Response = response;
		Uid = uid;
		Uname = uname;
		IsV = isV;
		Location = location;
	}
	
}
