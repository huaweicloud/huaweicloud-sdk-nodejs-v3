

export class EmotionConfig {
    public emotion?: EmotionConfigEmotionEnum | string;
    public constructor() { 
    }
    public withEmotion(emotion: EmotionConfigEmotionEnum | string): EmotionConfig {
        this['emotion'] = emotion;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EmotionConfigEmotionEnum {
    HAPPY = 'HAPPY',
    SAD = 'SAD',
    CALM = 'CALM',
    ANGER = 'ANGER'
}
