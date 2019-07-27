FROM alpine:edge
MAINTAINER Jacob Cavazos <jake@jacobcavazos.com>

ADD nginx-boot.sh /sbin/nginx-boot

RUN chmod +x /sbin/nginx-boot && \
    apk --update add nginx bash && \
    rm -fR /var/cache/apk/*

CMD [ "/sbin/nginx-boot" ]
EXPOSE 80
