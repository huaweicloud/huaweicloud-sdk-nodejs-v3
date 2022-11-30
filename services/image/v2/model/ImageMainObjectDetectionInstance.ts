

export class ImageMainObjectDetectionInstance {
    public label?: string;
    public location?: object;
    public confidence?: string;
    public constructor() { 
    }
    public withLabel(label: string): ImageMainObjectDetectionInstance {
        this['label'] = label;
        return this;
    }
    public withLocation(location: object): ImageMainObjectDetectionInstance {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: string): ImageMainObjectDetectionInstance {
        this['confidence'] = confidence;
        return this;
    }
}