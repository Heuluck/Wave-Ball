export interface BallSetting {
    //初始加载时的进度
    initialRange?: number;
    //圆设置
    //圆线条宽度
    lineWidth?: number;
    //圆线条颜色
    lineColor?: string;
    //波浪设置
    //宽度
    waveWidth?: number;
    //高度
    waveHeight?: number;
    //速度
    speed?: number;
    //背景波浪偏移
    bgWaveOffset?: number;
    //反转
    isReverse?: boolean;
    //反转背景波浪
    isReverseBg?: boolean;
    //是否显示背景波浪
    isShowBg?: boolean;
    //是否渐变
    isGradient?: boolean;
    //波浪颜色
    waveColor?: string | { start: string; end: string };
    //背景波浪颜色
    bgWaveColor?: string | { start: string; end: string };
}

export interface ProgressBallProps extends BallSetting {
    //当前进度
    value: number;
}

export interface BallSettingIS {
    //初始加载时的进度
    initialRange: number;
    //圆设置
    //圆线条宽度
    lineWidth: number;
    //圆线条颜色
    lineColor: string;
    //波浪设置
    //宽度
    waveWidth: number;
    //高度
    waveHeight: number;
    //速度
    speed: number;
    //背景波浪偏移
    bgWaveOffset: number;
    //反转
    isReverse: boolean;
    //反转背景波浪
    isReverseBg: boolean;
    //是否显示背景波浪
    isShowBg: boolean;
    //是否渐变
    isGradient: boolean;
    //波浪颜色
    waveColor: string | gradient;
    //背景波浪颜色
    bgWaveColor: string | gradient;
}

interface gradient {
    start: string;
    end: string;
}