package model;

public class EventInput {
	private int EventId;
	private String EventName;
	private String EventTime;
	private String EventImg;
	private String EventIntro;
	
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getEventName() {
		return EventName;
	}
	public void setEventName(String eventName) {
		EventName = eventName;
	}
	public String getEventTime() {
		return EventTime;
	}
	public void setEventTime(String eventTime) {
		EventTime = eventTime;
	}

	public String getEventImg() {
		return EventImg;
	}

	public void setEventImg(String eventImg) {
		EventImg = eventImg;
	}

	public String getEventIntro() {
		return EventIntro;
	}

	public void setEventIntro(String eventIntro) {
		EventIntro = eventIntro;
	}

	public EventInput(int eventId, String eventIntro, String eventImg, String eventTime, String eventName) {
		EventId = eventId;
		EventIntro = eventIntro;
		EventImg = eventImg;
		EventTime = eventTime;
		EventName = eventName;
	}
}
