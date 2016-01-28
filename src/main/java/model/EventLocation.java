package model;

public class EventLocation {
	private int EventId;
	private String Location;
	private int UserCount;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	public int getUserCount() {
		return UserCount;
	}
	public void setUserCount(int userCount) {
		UserCount = userCount;
	}
	public EventLocation(int eventId, String location, int userCount) {
		EventId = eventId;
		Location = location;
		UserCount = userCount;
	}
	
}
