package model;

public class EventClouds {
	private int EventId;
	private String Trem;
	private int Count;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getTrem() {
		return Trem;
	}
	public void setTrem(String trem) {
		Trem = trem;
	}
	public int getCount() {
		return Count;
	}
	public void setCount(int count) {
		Count = count;
	}
	public EventClouds(int eventId, String trem, int count) {
		super();
		EventId = eventId;
		Trem = trem;
		Count = count;
	}
}
