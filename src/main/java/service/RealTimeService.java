package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import db.Db;
import model.*;

public class RealTimeService {
	
	public ArrayList<TimeSeries> getTimeSeries(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<TimeSeries> ts = new ArrayList<TimeSeries>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ts.add(new TimeSeries(rs.getInt(1),rs.getString(2),rs.getInt(3),rs.getInt(4),rs.getInt(5)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ts;
	}
	
	public ArrayList<EventLocation> getEventLocation(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<EventLocation> el = new ArrayList<EventLocation>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	el.add(new EventLocation(rs.getInt(1),rs.getString(2),rs.getInt(3)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return el;
	}
	
	public ArrayList<HotTweet> getHotTweet(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<HotTweet> ht = new ArrayList<HotTweet>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ht.add(new HotTweet(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getInt(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ht;
	}
	
	public ArrayList<EventClouds> getEventClouds(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<EventClouds> ec = new ArrayList<EventClouds>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ec.add(new EventClouds(rs.getInt(1),rs.getString(2),rs.getInt(3)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ec;
	}
	
	public ArrayList<EventMood> getEventMood(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<EventMood> em = new ArrayList<EventMood>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	em.add(new EventMood(rs.getInt(1),rs.getString(2),rs.getInt(3)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return em;
	}

	public ArrayList<EventUser> getEventUser(String sql) throws Exception{
		Connection conn = Db.createConnection();
		ArrayList<EventUser> eu = new ArrayList<EventUser>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);
			ResultSet rs= ps.executeQuery();
			while(rs.next()){
				eu.add(new EventUser(rs.getInt(1),rs.getInt(2),rs.getInt(3),rs.getInt(4),rs.getInt(5)));
			}
			Db.close(rs);
			Db.close(ps);
			Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return eu;
	}
}
