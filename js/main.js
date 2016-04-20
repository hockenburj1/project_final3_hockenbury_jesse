$( document ).ready( function() {
  $( '#mobile-menu-button' ).click( function() {
      $( 'nav' ).slideToggle();
  } );
} );

// Determines if store is open
function isOpen() {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    days =
        {
            0: 'sunday',
            1: 'monday',
            2: 'tuesday',
            3: 'wednesday',
            4: 'thursday',
            5: 'friday',
            6: 'saturday'
        };

    hoursByDay =
        {
            monday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 22,
                    endMinutes: 0
                },
            tuesday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 22,
                    endMinutes: 0
                },
            wednesday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 22,
                    endMinutes: 0
                },
            thursday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 22,
                    endMinutes: 0
                },
            friday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 23,
                    endMinutes: 0
                },
            saturday:
                {
                    startHours: 10,
                    startMinutes: 30,
                    endHours: 23,
                    endMinutes: 0
                },
            sunday:
                {
                    startHours: 11,
                    startMinutes: 0,
                    endHours: 22,
                    endMinutes: 30
                }
        };

    dayName = days[ day ];

    if ( hours >= hoursByDay[ dayName ].startHours && hours < hoursByDay[ dayName ].endHours )
    {

        // Same hours but earlier minutes
        if (
            hours == hoursByDay[ dayName ].startHours ||
            hours == hoursByDay[ dayName ].endHours
        )
        {

            // A few minutes until open
            if ( minutes < hoursByDay[ dayName ].startMinutes ) {
                return false;
            }

            // closed a few minutes ago
            if ( minutes > hoursByDay[ dayName ].endMinutes ) {
                return false;
            }
        }

        return true;
    }

    return false;
}

// create and append list item stating store status
var openListItem = document.createElement( 'li' );
if ( isOpen() ) {
    var openListItemText = document.createTextNode( 'Currently Open!' );
    var openListItemClass = 'store-open';
} else {
    var openListItemText = document.createTextNode( 'Currently Closed!' );
    var openListItemClass = 'store-closed';
}

openListItem.appendChild( openListItemText );
document.getElementById( 'hours-list' ).appendChild( openListItem );
document.getElementById( 'hours-list' ).lastChild.className = openListItemClass;
