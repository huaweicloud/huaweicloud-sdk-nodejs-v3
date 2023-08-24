

export class MotionItem {
    public timestamp?: number;
    public root?: Array<number>;
    public joints?: Array<number>;
    public eyes?: Array<number>;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): MotionItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withRoot(root: Array<number>): MotionItem {
        this['root'] = root;
        return this;
    }
    public withJoints(joints: Array<number>): MotionItem {
        this['joints'] = joints;
        return this;
    }
    public withEyes(eyes: Array<number>): MotionItem {
        this['eyes'] = eyes;
        return this;
    }
}