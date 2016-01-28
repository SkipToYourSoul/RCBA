package model;

public class Retweet {
	private String RetweetTo;
	private String RetweetFrom;
	private String Time;
	public String getRetweetTo() {
		return RetweetTo;
	}
	public void setRetweetTo(String retweetTo) {
		RetweetTo = retweetTo;
	}
	public String getRetweetFrom() {
		return RetweetFrom;
	}
	public void setRetweetFrom(String retweetFrom) {
		RetweetFrom = retweetFrom;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public Retweet(String retweetTo, String retweetFrom, String time) {
		super();
		RetweetTo = retweetTo;
		RetweetFrom = retweetFrom;
		Time = time;
	}
}
