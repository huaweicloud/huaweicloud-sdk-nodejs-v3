

export class TrainTicketResult {
    private 'ticket_id'?: string | undefined;
    private 'check_port'?: string | undefined;
    private 'train_number'?: string | undefined;
    private 'departure_station'?: string | undefined;
    private 'destination_station'?: string | undefined;
    private 'departure_station_en'?: string | undefined;
    private 'destination_station_en'?: string | undefined;
    private 'departure_time'?: string | undefined;
    private 'seat_number'?: string | undefined;
    private 'ticket_price'?: string | undefined;
    private 'sale_method'?: string | undefined;
    private 'seat_category'?: string | undefined;
    private 'ticket_changing'?: string | undefined;
    private 'id_number'?: string | undefined;
    public name?: string;
    private 'log_id'?: string | undefined;
    private 'sale_location'?: string | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withTicketId(ticketId: string): TrainTicketResult {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId() {
        return this['ticket_id'];
    }
    public withCheckPort(checkPort: string): TrainTicketResult {
        this['check_port'] = checkPort;
        return this;
    }
    public set checkPort(checkPort: string | undefined) {
        this['check_port'] = checkPort;
    }
    public get checkPort() {
        return this['check_port'];
    }
    public withTrainNumber(trainNumber: string): TrainTicketResult {
        this['train_number'] = trainNumber;
        return this;
    }
    public set trainNumber(trainNumber: string | undefined) {
        this['train_number'] = trainNumber;
    }
    public get trainNumber() {
        return this['train_number'];
    }
    public withDepartureStation(departureStation: string): TrainTicketResult {
        this['departure_station'] = departureStation;
        return this;
    }
    public set departureStation(departureStation: string | undefined) {
        this['departure_station'] = departureStation;
    }
    public get departureStation() {
        return this['departure_station'];
    }
    public withDestinationStation(destinationStation: string): TrainTicketResult {
        this['destination_station'] = destinationStation;
        return this;
    }
    public set destinationStation(destinationStation: string | undefined) {
        this['destination_station'] = destinationStation;
    }
    public get destinationStation() {
        return this['destination_station'];
    }
    public withDepartureStationEn(departureStationEn: string): TrainTicketResult {
        this['departure_station_en'] = departureStationEn;
        return this;
    }
    public set departureStationEn(departureStationEn: string | undefined) {
        this['departure_station_en'] = departureStationEn;
    }
    public get departureStationEn() {
        return this['departure_station_en'];
    }
    public withDestinationStationEn(destinationStationEn: string): TrainTicketResult {
        this['destination_station_en'] = destinationStationEn;
        return this;
    }
    public set destinationStationEn(destinationStationEn: string | undefined) {
        this['destination_station_en'] = destinationStationEn;
    }
    public get destinationStationEn() {
        return this['destination_station_en'];
    }
    public withDepartureTime(departureTime: string): TrainTicketResult {
        this['departure_time'] = departureTime;
        return this;
    }
    public set departureTime(departureTime: string | undefined) {
        this['departure_time'] = departureTime;
    }
    public get departureTime() {
        return this['departure_time'];
    }
    public withSeatNumber(seatNumber: string): TrainTicketResult {
        this['seat_number'] = seatNumber;
        return this;
    }
    public set seatNumber(seatNumber: string | undefined) {
        this['seat_number'] = seatNumber;
    }
    public get seatNumber() {
        return this['seat_number'];
    }
    public withTicketPrice(ticketPrice: string): TrainTicketResult {
        this['ticket_price'] = ticketPrice;
        return this;
    }
    public set ticketPrice(ticketPrice: string | undefined) {
        this['ticket_price'] = ticketPrice;
    }
    public get ticketPrice() {
        return this['ticket_price'];
    }
    public withSaleMethod(saleMethod: string): TrainTicketResult {
        this['sale_method'] = saleMethod;
        return this;
    }
    public set saleMethod(saleMethod: string | undefined) {
        this['sale_method'] = saleMethod;
    }
    public get saleMethod() {
        return this['sale_method'];
    }
    public withSeatCategory(seatCategory: string): TrainTicketResult {
        this['seat_category'] = seatCategory;
        return this;
    }
    public set seatCategory(seatCategory: string | undefined) {
        this['seat_category'] = seatCategory;
    }
    public get seatCategory() {
        return this['seat_category'];
    }
    public withTicketChanging(ticketChanging: string): TrainTicketResult {
        this['ticket_changing'] = ticketChanging;
        return this;
    }
    public set ticketChanging(ticketChanging: string | undefined) {
        this['ticket_changing'] = ticketChanging;
    }
    public get ticketChanging() {
        return this['ticket_changing'];
    }
    public withIdNumber(idNumber: string): TrainTicketResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber() {
        return this['id_number'];
    }
    public withName(name: string): TrainTicketResult {
        this['name'] = name;
        return this;
    }
    public withLogId(logId: string): TrainTicketResult {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string | undefined) {
        this['log_id'] = logId;
    }
    public get logId() {
        return this['log_id'];
    }
    public withSaleLocation(saleLocation: string): TrainTicketResult {
        this['sale_location'] = saleLocation;
        return this;
    }
    public set saleLocation(saleLocation: string | undefined) {
        this['sale_location'] = saleLocation;
    }
    public get saleLocation() {
        return this['sale_location'];
    }
    public withConfidence(confidence: object): TrainTicketResult {
        this['confidence'] = confidence;
        return this;
    }
}