

export class ListQueriesStatus {
    private 'average_query_waiting_time'?: number;
    private 'average_time_consumption_of_queries'?: number;
    private 'average_time_consumption_of_sessions'?: number;
    private 'queries_count'?: number;
    private 'session_count'?: number;
    public constructor() { 
    }
    public withAverageQueryWaitingTime(averageQueryWaitingTime: number): ListQueriesStatus {
        this['average_query_waiting_time'] = averageQueryWaitingTime;
        return this;
    }
    public set averageQueryWaitingTime(averageQueryWaitingTime: number  | undefined) {
        this['average_query_waiting_time'] = averageQueryWaitingTime;
    }
    public get averageQueryWaitingTime(): number | undefined {
        return this['average_query_waiting_time'];
    }
    public withAverageTimeConsumptionOfQueries(averageTimeConsumptionOfQueries: number): ListQueriesStatus {
        this['average_time_consumption_of_queries'] = averageTimeConsumptionOfQueries;
        return this;
    }
    public set averageTimeConsumptionOfQueries(averageTimeConsumptionOfQueries: number  | undefined) {
        this['average_time_consumption_of_queries'] = averageTimeConsumptionOfQueries;
    }
    public get averageTimeConsumptionOfQueries(): number | undefined {
        return this['average_time_consumption_of_queries'];
    }
    public withAverageTimeConsumptionOfSessions(averageTimeConsumptionOfSessions: number): ListQueriesStatus {
        this['average_time_consumption_of_sessions'] = averageTimeConsumptionOfSessions;
        return this;
    }
    public set averageTimeConsumptionOfSessions(averageTimeConsumptionOfSessions: number  | undefined) {
        this['average_time_consumption_of_sessions'] = averageTimeConsumptionOfSessions;
    }
    public get averageTimeConsumptionOfSessions(): number | undefined {
        return this['average_time_consumption_of_sessions'];
    }
    public withQueriesCount(queriesCount: number): ListQueriesStatus {
        this['queries_count'] = queriesCount;
        return this;
    }
    public set queriesCount(queriesCount: number  | undefined) {
        this['queries_count'] = queriesCount;
    }
    public get queriesCount(): number | undefined {
        return this['queries_count'];
    }
    public withSessionCount(sessionCount: number): ListQueriesStatus {
        this['session_count'] = sessionCount;
        return this;
    }
    public set sessionCount(sessionCount: number  | undefined) {
        this['session_count'] = sessionCount;
    }
    public get sessionCount(): number | undefined {
        return this['session_count'];
    }
}