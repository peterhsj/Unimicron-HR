package test;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.json.JSONObject;
public class LoginServlet extends HttpServlet {
public void process(HttpServletRequest request,
HttpServletResponse response)
throws ServletException, IOException
{
response.setContentType("text/html; charset=utf-8");
PrintWriter out = response.getWriter();
System.out.println("Login Servlet");
String email = request.getParameter("email");
String password = request.getParameter("password");
if(!email.equals("1234") || !password.equals("1234")){
// JSON
JsonObjectResponse jsonResponse = new JsonObjectResponse();
jsonResponse.setTotalRows(0); // 因為沒資料，所以不用設定，如果有ArrayList
的資料，要設定
jsonResponse.setSuccess(false); // 這個一定要設定
jsonResponse.setData(null); // 因為沒資料，所以不用設定，如果有ArrayList
的資料，要設定jsonResponse.setMessage("登入資料錯誤！");
JSONObject f = new JSONObject(jsonResponse);
String returnValue = f.toString();
System.out.println(returnValue);// DEBUG
// OUTPUT
out.write(returnValue);
}else{
// JSON
JsonObjectResponse jsonResponse = new JsonObjectResponse();
jsonResponse.setTotalRows(0); // 因為沒資料，所以不用設定，如果有ArrayList
的資料，要設定
jsonResponse.setSuccess(true); // 這個一定要設定
jsonResponse.setData(null); // 因為沒資料，所以不用設定，如果有ArrayList
的資料，要設定
jsonResponse.setMessage("OK");
JSONObject f = new JSONObject(jsonResponse);
String returnValue = f.toString();
System.out.println(returnValue);// DEBUG
// OUTPUT
out.write(returnValue);
}
}
public void doGet(HttpServletRequest request,
HttpServletResponse response)
throws ServletException, IOException
{
process(request, response);
}
public void doPost(HttpServletRequest request,
HttpServletResponse response)
throws ServletException, IOException
{
process(request, response);
}
}