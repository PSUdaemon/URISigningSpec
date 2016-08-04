XML2RFC=xml2rfc
RFC2TXT=$(XML2RFC) --text
RFC2HTML=$(XML2RFC) --html

SOURCES=draft-ietf-cdni-uri-signing.xml
TXT_OUTPUT=$(SOURCES:.xml=.txt)
HTML_OUTPUT=$(SOURCES:.xml=.html)
OUTPUT=$(TXT_OUTPUT) $(HTML_OUTPUT)

all : $(OUTPUT)

txtdocs : $(TXT_OUTPUT)

htmldocs : $(HTML_DOCS)

clearcache :
	$(XML2RFC) --clear-cache

clean : clearcache
	rm -rf $(OUTPUT)

%.html : %.xml
	$(RFC2HTML) $<

%.txt :  %.xml
	$(RFC2TXT) $<

.PHONY : all clean clearcache txtdocs htmldocs
