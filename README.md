# NeedFinder

This project was designed to allow people to find nearby organizations such as hospitals, retirement homes, blood drives, and other locations or organizations that might need donations. Using this application, requesters would upload a request which would be displayed on a map and users can select the different requests and see what supplies are requested and additional information such as contact information, address, and additional instructions for drop-off or donation.

# Inspiration

As a team we wanted to provide a way for people to find how they can best get involved and help with the crisis. Currently, someone with supplies like masks to donate might not know how to donate or where they should go to donate without needing to directly contact local organizations. By creating an easy to access web application that is simple to post new requests and centered around finding nearby organizations in need, we hoped to match donors with requestors quickly and efficiently.

# What it does

The application opens to a single page where you can make new requests or view the current list of asks. The asks are also positioned on a map which you can scroll around, zoom in or out. New requests are automatically updated and added to the map based on the address put in.

# How we built it

We built a basic web-server and client application with React and Typescript. From there we developed a simple data-store using a JSON file and designed the structure for how we would store requests. We then went into developing a front-end using Formik for the request form and Material-UI for the components and styling. We decided to use the MapBox API to provide the Map and geocoding capabilities. We used a Google spreadsheet to tack progress and tasking while using Discord for communication.

# Challenges we ran into

The team had no experience working with the MapBox API and had limited experience working together in the past. Our skillsets were divergent and there was a learning curve for working with Typescript and React that slowed us down in the beginning. 

# Accomplishments that we're proud of

We were proud of what we were able to accomplish in the short time frame. Despite having no previous experience working with the MapBox API we were able to integrate it into our application and data store and use location data to display nearby requests. We were also proud of our ability to learn new technologies and work together to integrate them.

# What we learned

We learned how to use the MapBox API and improved upon our skills working with React and Typescript.

# What's next for NeedFinder

The next steps for this project would be continuing to expand upon the basic functionality. Introducing user profiles with credentials would allow for control over posted requests and tracking of the status of requests. Expanding on the basic donate page to allow users to see additional details, filter based on request types, add a search capability, add the ability to connect to social media and share nearby requests to help other potential donors find opportunities to get involved. Potentially, this could be developed into a volunteer/donation platform to match people to all kinds of nearby volunteer and donation opportunities. It could also be developed to allow for individual requesters vs organizational requesters to allow for people in need of small-scale volunteer efforts like transportation to a hospital or assistance with moving/shopping could be another use for this sort of platform.
#
