package db;

import java.sql.*;

public class Db {
	
	private static String database = "ocba";
    private static String ip = "localhost";
	
	public static Connection createConnection(){  
        Connection conn=null;
        String url="jdbc:mysql://10.11.1.212:3306/"+database+"?useUnicode=true&characterEncoding=utf8";
        String username="root";
        String password="root";
  
        try{  
            Class.forName("com.mysql.jdbc.Driver");  
            conn= DriverManager.getConnection(url, username, password);  
        }catch (Exception e){  
            e.printStackTrace();
        }  
        return conn;  
    }
	
	public static PreparedStatement prepare(Connection conn, String sql){  
        PreparedStatement ps=null;  
  
        try{  
            ps=conn.prepareStatement(sql);  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
        return ps;  
    }  
  
    public static void close(Connection conn){  
        if(conn == null){  
            return;  
        }  
        try{  
            conn.close();  
            conn=null;  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
    }  
  
    public static void close(PreparedStatement ps){  
        try{  
            ps.close();  
            ps=null;  
        }catch(Exception e){  
            e.printStackTrace();  
        }  
    }  
  
    public  static void close(ResultSet rs){  
        try{  
            rs.close();  
            rs=null;  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
    }  
}
