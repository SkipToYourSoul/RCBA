package model;

public class TimeSeries {
	private int EventId;
	private String Time;
	private int AllTweet;
	private int RTTweet;
	private int OriTweet;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public int getAllTweet() {
		return AllTweet;
	}
	public void setAllTweet(int allTweet) {
		AllTweet = allTweet;
	}
	public int getRTTweet() {
		return RTTweet;
	}
	public void setRTTweet(int rTTweet) {
		RTTweet = rTTweet;
	}
	public int getOriTweet() {
		return OriTweet;
	}
	public void setOriTweet(int oriTweet) {
		OriTweet = oriTweet;
	}
	public TimeSeries(int eventId, String time, int allTweet, int rTTweet,
			int oriTweet) {
		super();
		EventId = eventId;
		Time = time;
		AllTweet = allTweet;
		RTTweet = rTTweet;
		OriTweet = oriTweet;
	}
}
