<!DOCTYPE html>
<html lang="ja">
<head>
    <title>hello</title>
    <meta charset="utf-8">
</head>
<body>
    <form method="post">
        <input type="text" name="name">
        <input type="submit" value="Post!">
        <ul>
            <% for (var i = 0; i < posts.length; i++) {%>
            <li><%= posts[i] %></li>

            <% } %>
        </ul>
    </form>
</body>
</html>