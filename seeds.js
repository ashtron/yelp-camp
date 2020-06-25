var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
 
var data = [
    {
        name: "Great Smoky Mountains National Park", 
        image: "https://www.gannett-cdn.com/-mm-/c09164e22ed6ca7cb98e1def4341317c30929f22/c=0-153-1497-999/local/-/media/2016/08/05/USATODAY/USATODAY/636060128185669450-GreatSmokyMountainsNPChrisMobleysmall.jpg?width=3200&height=1680&fit=crop",
        description: "Great Smoky Mountains National Park is an American national park in the southeastern United States, with parts in Tennessee and North Carolina. The park straddles the ridgeline of the Great Smoky Mountains, part of the Blue Ridge Mountains, which are a division of the larger Appalachian Mountain chain."
    },
    {
        name: "Moran State Park", 
        image: "https://s20772.pcdn.co/wp-content/uploads/2014/07/Moran-State-Park-Image2.jpg",
        description: "Moran State Park is a public recreation area on Orcas Island in Puget Sound's San Juan Islands in the state of Washington, United States. The state park encompasses over 5,000 acres of various terrain including forests, wetlands, bogs, hills, and lakes."
    },
    {
        name: "Olympic National Park", 
        image: "https://i.redd.it/4qp1luuf3w111.jpg",
        description: "Olympic National Park is an American national park located in the State of Washington, on the Olympic Peninsula. The park has four regions: the Pacific coastline, alpine areas, the west side temperate rainforest and the forests of the drier east side."
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
            //  add a few campgrounds
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if(err){
            //             console.log(err)
            //         } else {
            //             console.log("added a campground");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                     text: "This place is great, but I wish there was internet",
            //                     author: "Homer"
            //                 }, function(err, comment){
            //                     if(err){
            //                         console.log(err);
            //                     } else {
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("Created new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;