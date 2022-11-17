

export class CommandTimeTaken {
    private 'calls_sum': number | undefined;
    private 'usec_sum': number | undefined;
    private 'command_name': string | undefined;
    private 'per_usec': string | undefined;
    private 'average_usec': number | undefined;
    public constructor(callsSum?: any, usecSum?: any, commandName?: any, perUsec?: any, averageUsec?: any) { 
        this['calls_sum'] = callsSum;
        this['usec_sum'] = usecSum;
        this['command_name'] = commandName;
        this['per_usec'] = perUsec;
        this['average_usec'] = averageUsec;
    }
    public withCallsSum(callsSum: number): CommandTimeTaken {
        this['calls_sum'] = callsSum;
        return this;
    }
    public set callsSum(callsSum: number | undefined) {
        this['calls_sum'] = callsSum;
    }
    public get callsSum() {
        return this['calls_sum'];
    }
    public withUsecSum(usecSum: number): CommandTimeTaken {
        this['usec_sum'] = usecSum;
        return this;
    }
    public set usecSum(usecSum: number | undefined) {
        this['usec_sum'] = usecSum;
    }
    public get usecSum() {
        return this['usec_sum'];
    }
    public withCommandName(commandName: string): CommandTimeTaken {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName() {
        return this['command_name'];
    }
    public withPerUsec(perUsec: string): CommandTimeTaken {
        this['per_usec'] = perUsec;
        return this;
    }
    public set perUsec(perUsec: string | undefined) {
        this['per_usec'] = perUsec;
    }
    public get perUsec() {
        return this['per_usec'];
    }
    public withAverageUsec(averageUsec: number): CommandTimeTaken {
        this['average_usec'] = averageUsec;
        return this;
    }
    public set averageUsec(averageUsec: number | undefined) {
        this['average_usec'] = averageUsec;
    }
    public get averageUsec() {
        return this['average_usec'];
    }
}