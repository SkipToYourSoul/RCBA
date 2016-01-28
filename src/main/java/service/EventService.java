package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import model.EventInformation;
import model.EventInput;
import db.Db;

public class EventService {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		Connection conn=Db.createConnection();  
        String sql="delete from eventinformation where EventId < 191";
        Statement stmt = conn.createStatement();
        stmt.execute(sql);
	}
	
	public ArrayList<EventInformation> getEventInformation() throws Exception{
		Connection conn=Db.createConnection();
		String sql = "select * from eventinformation order by EventTime";
		ArrayList<EventInformation> ei = new ArrayList<EventInformation>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ei.add(new EventInformation(rs.getInt(1),rs.getString(2),rs.getString(3),
            			rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ei;
	}
	
	public ArrayList<EventInformation> getEventIntro(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<EventInformation> ei = new ArrayList<EventInformation>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ei.add(new EventInformation(rs.getInt(1),rs.getString(2),rs.getString(3),
            			rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ei;
	}
	
	public ArrayList<EventInput> getEventInput() throws Exception{
		Connection conn=Db.createConnection();
		String sql = "select * from eventinput where isSearch = 1";
		ArrayList<EventInput> ei = new ArrayList<EventInput>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
				ei.add(new EventInput(rs.getInt(1),rs.getString(5),rs.getString(6),rs.getString(9),rs.getString(2)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ei;
	}

}
