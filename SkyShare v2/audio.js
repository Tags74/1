const AudioModule = {
    isMobile() {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    
    async getDesktopStream() {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: { cursor: "always" },
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false,
                    suppressLocalAudioPlayback: false
                },
                systemAudio: "include"
            });
            return stream;
        } catch (err) {
            console.error("Capture failed:", err);
            return null;
        }
    }
};