package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import db.Db;
import model.Retweet;

public class RepostService {
	public ArrayList<Retweet> getRetweet(String sql) throws Exception{
		Connection conn=Db.createConnection();
		ArrayList<Retweet> ts = new ArrayList<Retweet>();
		try{
			PreparedStatement ps=Db.prepare(conn, sql);  
            ResultSet rs= ps.executeQuery();
            while(rs.next()){
            	ts.add(new Retweet(rs.getString(1),rs.getString(2),rs.getString(3)));
            }
            Db.close(rs);  
            Db.close(ps);  
            Db.close(conn);
		}catch (Exception e){
			e.printStackTrace();
		}
		return ts;
	}
}
