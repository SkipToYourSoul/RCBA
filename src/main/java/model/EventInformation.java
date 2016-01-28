package model;

public class EventInformation {
	private int EventId;
	private String Title;
	private String Information;
	private String Img;
	private String Link;
	private String vLink;
	private String EventTime;

	public int getEventId() {
		return EventId;
	}

	public void setEventId(int eventId) {
		EventId = eventId;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public String getInformation() {
		return Information;
	}

	public void setInformation(String information) {
		Information = information;
	}

	public String getImg() {
		return Img;
	}

	public void setImg(String img) {
		Img = img;
	}

	public String getLink() {
		return Link;
	}

	public void setLink(String link) {
		Link = link;
	}

	public String getvLink() {
		return vLink;
	}

	public void setvLink(String vLink) {
		this.vLink = vLink;
	}

	public String getEventTime() {
		return EventTime;
	}

	public void setEventTime(String eventTime) {
		EventTime = eventTime;
	}

	public EventInformation(int eventId, String title, String information, String img, String link, String vLink, String eventTime) {
		EventId = eventId;
		Title = title;
		Information = information;
		Img = img;
		Link = link;
		this.vLink = vLink;
		EventTime = eventTime;
	}
}
