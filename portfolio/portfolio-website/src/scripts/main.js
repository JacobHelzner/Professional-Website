// This file contains JavaScript code for interactive features of the portfolio website.
// You can add functions to handle user interactions or dynamically load content as needed.

document.addEventListener('DOMContentLoaded', () => {
    // Example function to handle PDF downloads
    const papersSection = document.getElementById('papers');
    const videoSection = document.getElementById('videos');

    // Function to create a download link for academic papers
    function createDownloadLink(paperTitle, paperUrl) {
        const link = document.createElement('a');
        link.href = paperUrl;
        link.textContent = paperTitle;
        link.target = '_blank';
        link.download = paperTitle;
        return link;
    }

    // Example papers data
    const papers = [
        { title: 'Paper 1', url: 'path/to/paper1.pdf' },
        { title: 'Paper 2', url: 'path/to/paper2.pdf' }
    ];

    // Populate papers section
    papers.forEach(paper => {
        const link = createDownloadLink(paper.title, paper.url);
        papersSection.appendChild(link);
        papersSection.appendChild(document.createElement('br'));
    });

    // Function to create a video link
    function createVideoLink(videoTitle, videoUrl) {
        const link = document.createElement('a');
        link.href = videoUrl;
        link.textContent = videoTitle;
        link.target = '_blank';
        return link;
    }

    // Example videos data
    const videos = [
        { title: 'Demo Video 1', url: 'path/to/video1.mp4' },
        { title: 'Demo Video 2', url: 'path/to/video2.mp4' }
    ];

    // Populate videos section
    videos.forEach(video => {
        const link = createVideoLink(video.title, video.url);
        videoSection.appendChild(link);
        videoSection.appendChild(document.createElement('br'));
    });
});