(function() {
  jQuery(documents).on('turbolinks:load', function() {});
    comments = $('#comments')
    if comments.length > 0
        App.global_chat = App.cable.subscription.create {
            channel: "BlogsChannel"
            blog_id: comments.data('blog-id')
        },
        connected: ->
        disconnected: ->
        recieved: (data) ->
            comments.append data['comment']
        send_comment: (comment, blog_id) ->
            @perform 'send_comment', commment: comment, blog_id: blog_id
    $('#new_comment').submit (e) ->
        $this = $(this)
        textarea = $this.find('#comment_content')
        if $.trim(textarea.val()).length > 1
            App.global_chat.send_comment textarea.val(),
            comments.data('blog-id')
            textarea.val('')
        e.preventDefault()
        return false
}).call(this);
