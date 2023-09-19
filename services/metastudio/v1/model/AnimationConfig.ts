

export class AnimationConfig {
    public animation?: string;
    public constructor() { 
    }
    public withAnimation(animation: string): AnimationConfig {
        this['animation'] = animation;
        return this;
    }
}