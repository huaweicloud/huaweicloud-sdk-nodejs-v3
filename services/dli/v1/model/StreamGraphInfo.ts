

export class StreamGraphInfo {
    public jid?: string;
    public name?: string;
    public isStoppable?: boolean;
    public state?: string;
    private 'start-time'?: number;
    private 'end-time'?: number;
    public duration?: number;
    public constructor() { 
    }
    public withJid(jid: string): StreamGraphInfo {
        this['jid'] = jid;
        return this;
    }
    public withName(name: string): StreamGraphInfo {
        this['name'] = name;
        return this;
    }
    public withIsStoppable(isStoppable: boolean): StreamGraphInfo {
        this['isStoppable'] = isStoppable;
        return this;
    }
    public withState(state: string): StreamGraphInfo {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: number): StreamGraphInfo {
        this['start-time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start-time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start-time'];
    }
    public withEndTime(endTime: number): StreamGraphInfo {
        this['end-time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end-time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end-time'];
    }
    public withDuration(duration: number): StreamGraphInfo {
        this['duration'] = duration;
        return this;
    }
}