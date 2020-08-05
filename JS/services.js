$(document).ready(function() {
    const services = [ 
        { 
            name: 'UI / UX Design', 
            desc: `Clean and modern design patterns, optimized for performance and thoughtful interactions.`, 
            icon: 'fa fa-laptop-code' 
        }, 
        { 
            name: 'Web Development', 
            desc: `Coding things from scratch, and bringing ideas to life both in the browser and server.`, 
            icon: 'fa fa-server' 
        }, 
        {
            name: 'Logo Design & Branding',
            desc: `Clarifying your message and promoting your idea by creating a brand new logo.`, 
            icon: 'fa fa-magic' 
        },
        {
            name: 'Mobile Friendly',
            desc: `A responsive design makes your website accessible to all users. regardless of their device.`, 
            icon: 'fa fa-mobile-alt' 
        }
    ];

    $('.services > .container').append(`
        <div class="row"></div>
    `);

    services.forEach(service => { 
        $('.services > .container > .row:last-child').append(`
            <div class="col-md-4 col-sm-6">
                <div class="serviceBox">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="title">${service.name}</h3>
                    <p class="description">${service.desc}</p>
                </div>
            </div>
        `);     
    });
});