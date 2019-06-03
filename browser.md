Question:

> What happens when you type google.com into your browser and press enter?

1. Browser, software that requests and displays files from a remote server, requests a resource specified in the URL (uniform resource locater). This is a GET request (we're using HTTP protocol), we are requesting a resource not posting, or sending, any data to it.

The URL contains:
  * The protocol (http or https)
  * The server name (the domain name, a human readable name for the server)
  * The filename or path to filename (our resource)

2. GET request is sent from your computer via the client, the browser --> router --> name server.

The domain name servers (DNS) translates the domain name into an IP address, a computer/server readable name/address of the server.

3. The browser forms a connection to the server at the IP address (Internet Protocol address--32 bit numbers). Every computer or server on the internet has a unique IP address.(Some port stuff happens, but this could vary depending on how things are set up).

4. The server either accepts or rejects your request. Your request is HTTP protocol (specific way of speaking to the server) and is read as 'GET filename'. It retrieves the resource (file) you are requesting and sends the contents to  you.

5. The content sent is HTML for the requested web page to your browser. Any cookies are in the header of the response. The connection ends.

6. The browser receives this response data, specifically the HTML tags and create the DOM tree. CSS if there is any is handled after the HTML and creates the CSSOM. A render tree is created uniting HTML and CSS OMs. The appearance of the webpage changes, styling the web page changing fonts, etc. through 'painting.'


TLDR

URL ->
Browser ->
DNS ->
IP Address ->
To IP at Server Port ->
connect, accept request ->
Retrieve file ->
Respond with contents & end connection ->
Browser receives response, creates DOM for HTML ->
Browser receives CSS and creates CSSOM -> Browser creates render tree ->
Browser paints
