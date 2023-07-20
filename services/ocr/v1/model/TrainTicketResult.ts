

export class TrainTicketResult {
    private 'ticket_id'?: string;
    private 'check_port'?: string;
    private 'train_number'?: string;
    private 'departure_station'?: string;
    private 'destination_station'?: string;
    private 'departure_station_en'?: string;
    private 'destination_station_en'?: string;
    private 'departure_time'?: string;
    private 'seat_number'?: string;
    private 'ticket_price'?: string;
    private 'sale_method'?: string;
    private 'seat_category'?: string;
    private 'ticket_changing'?: string;
    private 'id_number'?: string;
    public name?: string;
    private 'log_id'?: string;
    private 'sale_location'?: string;
    public confidence?: object;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withTicketId(ticketId: string): TrainTicketResult {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withCheckPort(checkPort: string): TrainTicketResult {
        this['check_port'] = checkPort;
        return this;
    }
    public set checkPort(checkPort: string  | undefined) {
        this['check_port'] = checkPort;
    }
    public get checkPort(): string | undefined {
        return this['check_port'];
    }
    public withTrainNumber(trainNumber: string): TrainTicketResult {
        this['train_number'] = trainNumber;
        return this;
    }
    public set trainNumber(trainNumber: string  | undefined) {
        this['train_number'] = trainNumber;
    }
    public get trainNumber(): string | undefined {
        return this['train_number'];
    }
    public withDepartureStation(departureStation: string): TrainTicketResult {
        this['departure_station'] = departureStation;
        return this;
    }
    public set departureStation(departureStation: string  | undefined) {
        this['departure_station'] = departureStation;
    }
    public get departureStation(): string | undefined {
        return this['departure_station'];
    }
    public withDestinationStation(destinationStation: string): TrainTicketResult {
        this['destination_station'] = destinationStation;
        return this;
    }
    public set destinationStation(destinationStation: string  | undefined) {
        this['destination_station'] = destinationStation;
    }
    public get destinationStation(): string | undefined {
        return this['destination_station'];
    }
    public withDepartureStationEn(departureStationEn: string): TrainTicketResult {
        this['departure_station_en'] = departureStationEn;
        return this;
    }
    public set departureStationEn(departureStationEn: string  | undefined) {
        this['departure_station_en'] = departureStationEn;
    }
    public get departureStationEn(): string | undefined {
        return this['departure_station_en'];
    }
    public withDestinationStationEn(destinationStationEn: string): TrainTicketResult {
        this['destination_station_en'] = destinationStationEn;
        return this;
    }
    public set destinationStationEn(destinationStationEn: string  | undefined) {
        this['destination_station_en'] = destinationStationEn;
    }
    public get destinationStationEn(): string | undefined {
        return this['destination_station_en'];
    }
    public withDepartureTime(departureTime: string): TrainTicketResult {
        this['departure_time'] = departureTime;
        return this;
    }
    public set departureTime(departureTime: string  | undefined) {
        this['departure_time'] = departureTime;
    }
    public get departureTime(): string | undefined {
        return this['departure_time'];
    }
    public withSeatNumber(seatNumber: string): TrainTicketResult {
        this['seat_number'] = seatNumber;
        return this;
    }
    public set seatNumber(seatNumber: string  | undefined) {
        this['seat_number'] = seatNumber;
    }
    public get seatNumber(): string | undefined {
        return this['seat_number'];
    }
    public withTicketPrice(ticketPrice: string): TrainTicketResult {
        this['ticket_price'] = ticketPrice;
        return this;
    }
    public set ticketPrice(ticketPrice: string  | undefined) {
        this['ticket_price'] = ticketPrice;
    }
    public get ticketPrice(): string | undefined {
        return this['ticket_price'];
    }
    public withSaleMethod(saleMethod: string): TrainTicketResult {
        this['sale_method'] = saleMethod;
        return this;
    }
    public set saleMethod(saleMethod: string  | undefined) {
        this['sale_method'] = saleMethod;
    }
    public get saleMethod(): string | undefined {
        return this['sale_method'];
    }
    public withSeatCategory(seatCategory: string): TrainTicketResult {
        this['seat_category'] = seatCategory;
        return this;
    }
    public set seatCategory(seatCategory: string  | undefined) {
        this['seat_category'] = seatCategory;
    }
    public get seatCategory(): string | undefined {
        return this['seat_category'];
    }
    public withTicketChanging(ticketChanging: string): TrainTicketResult {
        this['ticket_changing'] = ticketChanging;
        return this;
    }
    public set ticketChanging(ticketChanging: string  | undefined) {
        this['ticket_changing'] = ticketChanging;
    }
    public get ticketChanging(): string | undefined {
        return this['ticket_changing'];
    }
    public withIdNumber(idNumber: string): TrainTicketResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
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
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSaleLocation(saleLocation: string): TrainTicketResult {
        this['sale_location'] = saleLocation;
        return this;
    }
    public set saleLocation(saleLocation: string  | undefined) {
        this['sale_location'] = saleLocation;
    }
    public get saleLocation(): string | undefined {
        return this['sale_location'];
    }
    public withConfidence(confidence: object): TrainTicketResult {
        this['confidence'] = confidence;
        return this;
    }
    public withTextLocation(textLocation: object): TrainTicketResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
}