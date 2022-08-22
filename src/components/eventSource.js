let source;
export function createEventSource(access_token) {
    source = new EventSource(
        `https://streaming-graph.facebook.com/{live-video-id}/live_comments?access_token=${access_token}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);
  }
export function useEventSource() {
    return source
  }