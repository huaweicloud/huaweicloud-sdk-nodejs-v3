

export class CommandTimeTaken {
    private 'calls_sum'?: number;
    private 'usec_sum'?: number;
    private 'command_name'?: string;
    private 'per_usec'?: string;
    private 'average_usec'?: number;
    public constructor(callsSum?: number, usecSum?: number, commandName?: string, perUsec?: string, averageUsec?: number) { 
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
    public set callsSum(callsSum: number  | undefined) {
        this['calls_sum'] = callsSum;
    }
    public get callsSum(): number | undefined {
        return this['calls_sum'];
    }
    public withUsecSum(usecSum: number): CommandTimeTaken {
        this['usec_sum'] = usecSum;
        return this;
    }
    public set usecSum(usecSum: number  | undefined) {
        this['usec_sum'] = usecSum;
    }
    public get usecSum(): number | undefined {
        return this['usec_sum'];
    }
    public withCommandName(commandName: string): CommandTimeTaken {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withPerUsec(perUsec: string): CommandTimeTaken {
        this['per_usec'] = perUsec;
        return this;
    }
    public set perUsec(perUsec: string  | undefined) {
        this['per_usec'] = perUsec;
    }
    public get perUsec(): string | undefined {
        return this['per_usec'];
    }
    public withAverageUsec(averageUsec: number): CommandTimeTaken {
        this['average_usec'] = averageUsec;
        return this;
    }
    public set averageUsec(averageUsec: number  | undefined) {
        this['average_usec'] = averageUsec;
    }
    public get averageUsec(): number | undefined {
        return this['average_usec'];
    }
}