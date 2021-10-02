class Hall{

    constructor(container, rows, seats,name) {
        this.container = container;
        this.rows = rows;
        this.seats = seats;
        this.name = name;
    }

    render(){
        this.setEventDisplay();
    }


    setEventDisplay(){
        // const showCaseDiv = this.getShowCase();
        // this.container.appendChild(showCaseDiv);
        // this.changeStyleSheets()
        this.writeRows(this.rows,this.seats);

    }

    getShowCase() {
        const showCase = document.createElement('ul');
        showCase.className = 'showcase';

        const elemOne = document.createElement('li');
        const seat = document.createElement('div');
        const seatSmall = document.createElement('small');

        seatSmall.textContent = 'N/A'
        seat.className = 'seat';
        elemOne.appendChild(seat);
        elemOne.appendChild(seatSmall);

        const elemTwo = document.createElement('li');
        const seatSelected = document.createElement('div')
        const seatSelectSmall = document.createElement('small');

        seatSelectSmall.textContent = 'Selected'
        seatSelected.className = 'seat selected show';
        elemTwo.appendChild(seatSelected);
        elemTwo.appendChild(seatSelectSmall);

        const elemThree = document.createElement('li');
        const seatOccupied = document.createElement('div')
        const seatOccupiedSmall = document.createElement('small');

        seatOccupiedSmall.textContent = 'Occupied';
        seatOccupied.className = 'seat occupied';
        elemThree.appendChild(seatOccupied);
        elemThree.appendChild(seatOccupiedSmall);

        showCase.appendChild(elemOne);
        showCase.appendChild(elemTwo);
        showCase.appendChild(elemThree);

        return showCase
    }

    writeRows(){
        const hallContainer = document.createElement('div');
        hallContainer.id = 'hall-container';
        const screen = document.createElement('div');
        screen.className = 'screen';

        const sides = ['left','right'];
        for (let i = 0; i < sides.length; i++) {
            const cinemaSeats = document.createElement('div');
            cinemaSeats.className = 'cinema-seats ' + sides[i];
            for (let i = 0; i < this.rows; i++) {

                const cinemaRow = document.createElement('div')
                cinemaRow.className = 'cinema-row row-' + String(i);

                for (let j = 0; j < this.seats; j++) {
                    const seat = document.createElement('div');
                    seat.className = 'seat';
                    cinemaRow.appendChild(seat);
                }
                cinemaSeats.appendChild(cinemaRow);
            }
            hallContainer.appendChild(cinemaSeats);

        }
        this.container.appendChild(screen)
        this.container.appendChild(hallContainer);

        this.setSeatListener();
    }

    setSeatListener(){
        // $('.cinema-seats .seat').on('click', function() {
        //     $(this).toggleClass('active');
        // });
    }
}

