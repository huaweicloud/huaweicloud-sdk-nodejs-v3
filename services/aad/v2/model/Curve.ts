

export class Curve {
    private 'in'?: number;
    public out?: number;
    public time?: number;
    public constructor() { 
    }
    public withIn(_in: number): Curve {
        this['in'] = _in;
        return this;
    }
    public set _in(_in: number  | undefined) {
        this['in'] = _in;
    }
    public get _in(): number | undefined {
        return this['in'];
    }
    public withOut(out: number): Curve {
        this['out'] = out;
        return this;
    }
    public withTime(time: number): Curve {
        this['time'] = time;
        return this;
    }
}