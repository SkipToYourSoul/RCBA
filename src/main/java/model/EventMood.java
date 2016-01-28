package model;

public class EventMood {
	private int EventId;
	private String Mood;
	private int Count;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getMood() {
		return Mood;
	}
	public void setMood(String mood) {
		Mood = mood;
	}
	public int getCount() {
		return Count;
	}
	public void setCount(int count) {
		Count = count;
	}
	public EventMood(int eventId, String mood, int count) {
		super();
		EventId = eventId;
		Mood = mood;
		Count = count;
	}
}
