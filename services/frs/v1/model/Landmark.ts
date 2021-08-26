import { Point } from './Point';


export class Landmark {
    private 'eyes_contour': Array<Point> | undefined;
    private 'mouth_contour': Array<Point> | undefined;
    private 'face_contour': Array<Point> | undefined;
    private 'eyebrow_contour': Array<Point> | undefined;
    private 'nose_contour': Array<Point> | undefined;
    public constructor(eyesContour?: any, mouthContour?: any, faceContour?: any, eyebrowContour?: any, noseContour?: any) { 
        this['eyes_contour'] = eyesContour;
        this['mouth_contour'] = mouthContour;
        this['face_contour'] = faceContour;
        this['eyebrow_contour'] = eyebrowContour;
        this['nose_contour'] = noseContour;
    }
    public withEyesContour(eyesContour: Array<Point>): Landmark {
        this['eyes_contour'] = eyesContour;
        return this;
    }
    public set eyesContour(eyesContour: Array<Point> | undefined) {
        this['eyes_contour'] = eyesContour;
    }
    public get eyesContour() {
        return this['eyes_contour'];
    }
    public withMouthContour(mouthContour: Array<Point>): Landmark {
        this['mouth_contour'] = mouthContour;
        return this;
    }
    public set mouthContour(mouthContour: Array<Point> | undefined) {
        this['mouth_contour'] = mouthContour;
    }
    public get mouthContour() {
        return this['mouth_contour'];
    }
    public withFaceContour(faceContour: Array<Point>): Landmark {
        this['face_contour'] = faceContour;
        return this;
    }
    public set faceContour(faceContour: Array<Point> | undefined) {
        this['face_contour'] = faceContour;
    }
    public get faceContour() {
        return this['face_contour'];
    }
    public withEyebrowContour(eyebrowContour: Array<Point>): Landmark {
        this['eyebrow_contour'] = eyebrowContour;
        return this;
    }
    public set eyebrowContour(eyebrowContour: Array<Point> | undefined) {
        this['eyebrow_contour'] = eyebrowContour;
    }
    public get eyebrowContour() {
        return this['eyebrow_contour'];
    }
    public withNoseContour(noseContour: Array<Point>): Landmark {
        this['nose_contour'] = noseContour;
        return this;
    }
    public set noseContour(noseContour: Array<Point> | undefined) {
        this['nose_contour'] = noseContour;
    }
    public get noseContour() {
        return this['nose_contour'];
    }
}