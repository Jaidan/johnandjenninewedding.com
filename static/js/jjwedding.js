$(document).ready(function() {
    $('.attending-option').click(function() {
        var $this = $(this);
        var $radio = $(':radio[name="Field103"]').val($this.text());
        $('.attending-option').removeClass('selected');
        $this.addClass('selected');
    });
    $('#form2').submit(function() {
        var $this= $(this);
        if (validate_form($this)) {
            $('#rsvp-thankyou').fadeTo(500, 100).delay(3000)
                .fadeTo(500, 0);
            $(this).ajaxSubmit();
        }
        return false;
    });
    function validate_form($form) {
        return (
            $form.find('#Field1').val().trim() != "" &&
            $form.find('#Field2').val().trim() != "" &&
            $form.find(':radio[name="Field103"]').val().trim() != ""
        )
    }
});
