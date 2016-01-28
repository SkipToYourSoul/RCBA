package model;

/**
 * Created by liye on 15/11/30.
 *
 */
public class EventUser {
    private int eventId;
    private int manUser;
    private int womenUser;
    private int vipUser;
    private int nVipUser;

    public int getEventId() {
        return eventId;
    }

    public int getManUser() {
        return manUser;
    }

    public int getWomenUser() {
        return womenUser;
    }

    public int getVipUser() {
        return vipUser;
    }

    public int getnVipUser() {
        return nVipUser;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public void setManUser(int manUser) {
        this.manUser = manUser;
    }

    public void setWomenUser(int womenUser) {
        this.womenUser = womenUser;
    }

    public void setVipUser(int vipUser) {
        this.vipUser = vipUser;
    }

    public void setnVipUser(int nVipUser) {
        this.nVipUser = nVipUser;
    }

    public EventUser(int eventId, int manUser, int womenUser, int vipUser, int nVipUser) {
        this.eventId = eventId;
        this.manUser = manUser;
        this.womenUser = womenUser;
        this.vipUser = vipUser;
        this.nVipUser = nVipUser;
    }
}
