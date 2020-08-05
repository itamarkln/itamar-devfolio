$(document).ready(function() {
    const skills = [ 'Html / CSS', 'Javascript / JQuery', 'Node.js', 'Angular 2+', 'C', 'Java', 'MongoDB / Mongoose' ];
    const skillStrengths = [ 90, 85, 80, 85, 75, 70, 80 ];
    let i = 0;

    skills.forEach(skill => {
        $('.pg-bars').append(`
            <div class="pgbar-container">
                <div class="pgbar-data">
                    <p class="subj">${skill}</p>
                    <p class="prcntg">${skillStrengths[i]}%</p>
                </div>
                <div class="progress-bar">
                  <span class="bar">
                    <span class="progress" style="width: ${skillStrengths[i]}%"></span>
                  </span>
                </div>
            </div>
        `);
        
        i++;
    });

        $(function() {
                let $pgbars = $(".progress");
                let $section = $('#about-section');
                let $queue = $({});

                function loadDaBars() {
                    $(".progress").each(function() {
                        $(this)
                            .data("origWidth", $(this).width())
                            .width(0)
                            .animate({
                                width: $(this).data("origWidth")
                            }, 1200);
                    });
        }

        $(document).bind('scroll', function(ev) {
            let scrollOffset = $(document).scrollTop();
            let containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                loadDaBars();
                // unbind event not to load scrolsl again
                $(document).unbind('scroll');
            }
        });
        
    });
});