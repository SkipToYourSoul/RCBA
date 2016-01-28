package model;

public class PlatformDistribution {
	private int EventId;
	private String Platform;
	private int Count;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public String getPlatform() {
		return Platform;
	}
	public void setPlatform(String platform) {
		Platform = platform;
	}
	public int getCount() {
		return Count;
	}
	public void setCount(int count) {
		Count = count;
	}
	
	public PlatformDistribution(int e,String p,int c){
		EventId = e;
		Platform = p;
		Count = c;
	}
}
