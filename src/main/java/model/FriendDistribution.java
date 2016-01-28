package model;

public class FriendDistribution {
	private int EventId;
	private int FriendsCount;
	private int UserCount;
	public int getEventId() {
		return EventId;
	}
	public void setEventId(int eventId) {
		EventId = eventId;
	}
	public int getFriendsCount() {
		return FriendsCount;
	}
	public void setFriendsCount(int friendsCount) {
		FriendsCount = friendsCount;
	}
	public int getUserCount() {
		return UserCount;
	}
	public void setUserCount(int userCount) {
		UserCount = userCount;
	}
	
	public FriendDistribution(int e,int f,int u){
		EventId = e;
		FriendsCount = f;
		UserCount = u;
	}
}
