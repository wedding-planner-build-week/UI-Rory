// Tabs

class TabLink {
    constructor(tabElement) {
        //assign this.tabElement to the tabElement DOM reference
        this.tabElement = tabElement;
        console.log('this.tabElement', tabElement);

        // Get the 'data-tab' value from this.tabElement and store it here
        this.tabData = this.tabElement.dataset.tab; 
        console.log('this.tabData value', this.tabData);

        // Use if statement to display cards based on user selected tab

        if(this.tabData === 'all') {
            // If 'all' is true, select all team cards
            this.cards = document.querySelectorAll('.tabs-item');
            console.log('cards when all selected', this.cards);
        } else {
            // Else if 'all' is false, only select the cards with matching this.tabData values
            this.cards = document.querySelectorAll(`.tabs-item[data-tab="${this.tabData}"]`);
            console.log('cards when user selectes single tab selected', this.cards);
        }

        // Map over NodeList created with if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class
        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        console.log('this.cards after mapping to new TabCard', this.cards);

        // Add a click event that invokes this.selectTab
        this.tabElement.addEventListener('click', () =>  this.selectTab());
    }

    selectTab() {

        // Select all elements with the .tabs-link class on them
        let tabsLinks = document.querySelectorAll('.tabs-link');
        console.log('tabsLinks in selectTab', tabsLinks)

        //Iterate through the NodeList remocing the .active-tab class from each element
        tabsLinks.forEach(tab => tab.classList.remove('tabs-link-selected'));

        // Select all of the elements with the .tabs-item class

        let cards = document.querySelectorAll('.tabs-item');
        console.log('select all elements with the .tabs-item class', cards)

        // Iterate through the NodeList setting the display style on each to 'none'

        cards.forEach(card => card.style.display = "none")

        // Add a class of ".tabs-link-selected" to this.tabElement
        this.tabElement.classList.add('tabs-link-selected');

        this.cards.forEach(card => card.selectCard());

    }
}

class TabCard {
    constructor(cardElement) {
        // Assign this.cardElement to the cardElement DOM reference
        this.cardElement = cardElement;
        console.log('this.cardElement', this.cardElement);
    }
    selectCard() {
        //Update the style of this.cardElement to display = "flex"
        this.cardElement.style.display = "block";
    }
}



// Select all classes names '.tabs-link' and assign that value to the tabs variables

let tabsLinks = document.querySelectorAll('.tabs-link');
console.log('tabsLinks', tabsLinks)
  
  // Use a forEach method to iterate over the DOM NodeList and instantiate a new TabLink class object

  tabsLinks.forEach(function(tablink) {
      console.log('tablink', tablink);
      return new TabLink(tablink)
  });