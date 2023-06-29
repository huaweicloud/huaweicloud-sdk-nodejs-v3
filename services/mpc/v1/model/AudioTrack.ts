

export class AudioTrack {
    public type?: number;
    public left?: number;
    public right?: number;
    public constructor() { 
    }
    public withType(type: number): AudioTrack {
        this['type'] = type;
        return this;
    }
    public withLeft(left: number): AudioTrack {
        this['left'] = left;
        return this;
    }
    public withRight(right: number): AudioTrack {
        this['right'] = right;
        return this;
    }
}